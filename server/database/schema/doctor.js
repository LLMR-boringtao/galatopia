const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const SALT_WORK_FACTOR = 10
const MAX_LOGIN_ATTEMPTS = 5
const LOCK_TIME = 2 * 60 * 60 * 1000
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const DoctorSchema = new Schema({
  uid: Number,
  phone: String,
  name: String,
  // doctor / expert / gov / company / drugstore / inspector
  type: {
    type: String,
    default: 'doctor'
  },
  // 上级的医生
  upDoctor: {
    type: ObjectId,
    ref: 'Doctor'
  },
  expertUid: Number,
  // 下级医生
  downDoctor: {
    type: ObjectId,
    ref: 'Doctor'
  },
  doctorUid: Number,
  province: String,
  district: String,
  city: String,
  room: String, // 科室
  position: String, // 职务
  level: String, // 职称
  outpatient: Number, // 门诊
  outpatientTime: String, // 门诊时间
  medicine: [{
    type: ObjectId,
    ref: 'Medicine'
  }],
  test: [{
    type: ObjectId,
    ref: 'Test'
  }],
  sex: String,
  email: String,
  avatarUrl: String,
  password: String,
  hashed_password: String,
  hospital: {
    type: ObjectId,
    ref: 'Hospital'
  },
  invite: {
    type: ObjectId,
    ref: 'Invite'
  },
  autotrans: {
    type: Number, // 转诊值
    default: -2.50
  },
  verifyCode: {
    type: String,
    default: ''
  },
  status: {
    type: Number,
    default: 1
  },
  accessToken: {
    type: String,
    default: ''
  },
  fund: {
    type: Number,
    default: 0
  },
  user: {
    type: ObjectId,
    ref: 'User'
  },
  meta: {
    createdAt: {
      type: Date,
      default: Date.now()
    },
    updatedAt: {
      type: Date,
      default: Date.now()
    }
  }
})

DoctorSchema.virtual('isLocked').get(function () {
  return !!(this.lockUntil && this.lockUntil > Date.now())
})

DoctorSchema.pre('save', function (next) {
  if (this.isNew) {
    this.meta.createdAt = this.meta.updatedAt = Date.now()
  } else {
    this.meta.updatedAt = Date.now()
  }
  next()
})

DoctorSchema.pre('save', function (next) {
  let user = this
  if (!user.isModified('password')) return next()
  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) return next(err)
    bcrypt.hash(user.password, salt, (error, hash) => {
      if (error) return next(error)
      user.password = hash
      next()
    })
  })
})

DoctorSchema.methods = {
  comparePassword: function (_password, password) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(_password, password, function (err, isMatch) {
        if (!err) resolve(isMatch)
        else reject(err)
      })
    })
  },

  incLoginAttempts: function (user) {
    const that = this

    return new Promise((resolve, reject) => {
      if (that.lockUntil && that.lockUntil < Date.now()) {
        that.update({
          $set: {
            loginAttempts: 1
          }, 
          $unset: {
            lockUntil: 1
          }
        }, function (err) {
          if (!err) resolve(true)
          else reject(err)
        })
      } else {
        let updates = {
          $inc: {
            loginAttempts: 1
          }
        }

        if (that.loginAttempts + 1 >= MAX_LOGIN_ATTEMPTS && !that.isLocked) {
          updates.$set = {
            lockUntil: Date.now() + LOCK_TIME
          }
        }

        that.update(updates, err => {
          if (!err) resolve(true)
          else reject(err)
        })
      }
    })
  }
}

mongoose.model('Doctor', DoctorSchema)
