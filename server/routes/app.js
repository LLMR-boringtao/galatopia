import api from '../api'
import { controller, get, post, del, put, adminRole } from '../decorator/router'
import { getQiniuToken } from '../controllers/util'

@controller('/app')
export class AppController {
  @post('/check')
  async checkSave (ctx, next) {
    console.log(ctx.request.body)
    let {patientPhone, patientName, doctorName, doctorPhone, result, checkTime, img, patientBirthDate = '', deviceType = 1, sex} = ctx.request.body
    if (!patientName || !patientPhone || !doctorPhone) {
      return (ctx.body = {
        err: '数据错误',
        success: false
      })
    }

    try {
      let doctor = await api.doctor.getDoctorByPhone(doctorPhone)

      if (!doctor) {
        const body = {
          name: doctorName,
          phone: doctorPhone
        }
        doctor = await api.doctor.saveDoctor(body)
      }

      let patient = await api.patient.getPatientByPhone(patientPhone)
      // patient = await api.patient.updatePatient(patient)
      if (!patient) {
        let birthDate = ''
        if (patientBirthDate) {
          let date = []
          date = patientBirthDate.split('-')
          birthDate = new Date(date[0], date[1] - 1, date[2])
        }

        let body = {
          name: patientName,
          phone: patientPhone,
          date: birthDate,
          sex: sex
        }
        if (doctor.type === 'doctor') {
          body.doctor = doctor._id
        } else {
          body.expert = doctor._id
        }
        patient = await api.patient.savePatient(body)
      } else {
        if (doctor.type === 'expert') {
          if (patient.expert.indexOf(doctor._id) === -1) {
            patient.expert.push(doctor._id)
            patient = await api.patient.updatePatient(patient)
          }
        } else if (doctor.type === 'doctor') {
          if (patient.doctor.indexOf(doctor._id) === -1) {
            patient.doctor.push(doctor._id)
            patient = await api.patient.updatePatient(patient)
          }
        }
      }

      const body = {
        doctor: doctor._id,
        patient: patient._id,
        result: result,
        img: img,
        checkTime: checkTime,
        deviceType: deviceType
      }

      const data = await api.check.save(body)
      // 更新患者
      await api.patient.updatePatient(patient)
      api.sms.checkSms(patient, doctor, deviceType, result, checkTime)
      ctx.body = {
        data: data._id,
        success: true
      }
    } catch (err) {
      console.log(err)
      ctx.body = {
        err: '数据错误',
        success: false
      }
    }
  }

  @post('/signature')
  async signature (ctx, next) {
    const body = ctx.request.body
    console.log(body)
    let res = await getQiniuToken()
    ctx.body = {
      data: res,
      success: true
    }
  }
}
