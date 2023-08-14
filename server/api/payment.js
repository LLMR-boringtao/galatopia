import mongoose from 'mongoose'

const Payment = mongoose.model('Payment')
const Reputation = mongoose.model('Reputation')

export async function getOrders(filters, page, limit) {
  const data = await Payment
    .find(filters)
    .skip((page - 1) * limit)
    .populate('user')
    .limit(Number(limit))
    .sort({_id: -1})
    .exec()
  return data
}

export async function getOrdersCount(filters) {
  const data = await Payment
    .count(filters)
    .exec()
  return data
}

export async function create(user, payType, totalFee, tradeId) {
  let payment = new Payment({
    user: user._id,
    payType: payType,
    totalFee: totalFee,
    tradeId: tradeId
  })
  payment = await payment.save()
  return payment
}

export async function saveReputation(reputation) {
  reputation = new Reputation(reputation)
  reputation = await reputation.save()
  return reputation
}

export async function getOrderReputation(id) {
  const data = await Reputation
    .findOne({order: id})
    .exec()
  return data
}

export async function getReputations(id) {
  const data = await Reputation
    .find({products: id})
    .populate('user')
    .exec()
  return data
}

export async function fetchOrder(id) {
  const data = await Payment
    .findOne({_id: id})
    .exec()
  return data
}

export async function update(order) {
  const data = await order.save()
  return data
}

export async function fetchAllOrders(user) {
  const data = await Payment
    .find({
      user: user._id,
      success: 1,
      status: 1
    })
    .sort({'meta.updatedAt': -1})
    .exec()
  return data
}

export async function fetchOrders(user, params) {
  console.log(params)
  const { status, page, pageSize } = params
  let filters = {}
  if (status === '') {
    filters = {
      user: user._id,
      status: 1
    }
  } else {
    filters = {
      user: user._id,
      success: status,
      status: 1
    }
  }
  const data = await Payment
    .find(filters)
    .skip(Number((page - 1) * pageSize))
    .limit(Number(pageSize))
    .populate('address')
    .sort({'meta.createdAt': -1})
    .exec()
  return data
}

export async function getMyDoctorsofSellor(sellorId, doctorId) {
  console.log('doctorId')
  console.log(doctorId)
  const data = await Payment
  .aggregate([
    {
      $project: {
        month: {$month: '$meta.createdAt'},
        year: {$year: '$meta.createdAt'},
        success: 1,
        totalFee: 1,
        doctor: 1
      }
    },
    {
      $match: {
        success: {$gte: 1},
        doctor: doctorId
      }
    },
    {
      $group: {
        _id: {month: '$month', year: '$year'},
        total: {$sum: '$totalFee'}
      }
    }
  ])
  return data
}

export async function fetchCustomMonthOrders(sellor, year, month) {
  console.log(sellor)
  const data = await Payment
  .aggregate([
    {
      $lookup:
      {
        from: "users",
        localField: 'user',
        foreignField: "_id",
        as: "customer"
      }
    },
    {
      $project:
      {
        month: {$month: "$meta.createdAt"},
        year: {$year: "$meta.createdAt"},
        totalFee: 1,
        _id: 1,
        success: 1,
        products: 1,
        user: 1,
        customer: 1,
        sellor: 1,
        date: '$meta.createdAt'
      }
    },
    {
      $match:
      {
        success: {$gte: 1}, // 大于等于1
        month: parseInt(month),
        year: parseInt(year),
        sellor: sellor
      }
    }
  ])
  return data
}

export async function fetchDoctorOrders(doctorId, month) {
  console.log(doctorId)
  const date = month.split('-')
  const nowYear = date[0]
  const nowMonth = date[1]
  console.log(nowMonth)
  const data = await Payment
  .aggregate([
    {
      $lookup:
      {
        from: "users",
        localField: 'user',
        foreignField: "_id",
        as: "customer"
      }
    },
    {
      $project:
      {
        month: {$month: "$meta.createdAt"},
        year: {$year: "$meta.createdAt"},
        totalFee: 1,
        _id: 1,
        success: 1,
        doctor: 1,
        products: 1,
        user: 1,
        customer: 1,
        date: '$meta.createdAt'
      }
    },
    {
      $match:
      {
        success: {$gte: 1}, // 大于等于1
        month: parseInt(nowMonth),
        year: parseInt(nowYear),
        doctor: doctorId
      }
    }
  ])
  return data
}

export async function fetchSellorOrders(sellorId, month) {
  console.log(sellorId)
  const date = month.split('-')
  const nowYear = date[0]
  const nowMonth = date[1]
  console.log(nowMonth)
  const data = await Payment
  .aggregate([
    {
      $lookup:
      {
        from: "users",
        localField: 'doctor',
        foreignField: "_id",
        as: "doctors"
      }
    },
    {
      $project:
      {
        month: {$month: "$meta.createdAt"},
        year: {$year: "$meta.createdAt"},
        totalFee: 1,
        _id: 1,
        success: 1,
        products: 1,
        user: 1,
        doctors: 1,
        sellor: 1,
        date: '$meta.createdAt'
      }
    },
    {
      $match:
      {
        success: {$gte: 1}, // 大于等于1
        month: parseInt(nowMonth),
        year: parseInt(nowYear),
        sellor: sellorId
      }
    }
  ])
  return data
}

export async function del(payment) {
  try {
    await payment.remove()
  } catch (e) {
    console.log(e)
  }
  return true
}
