import mongoose from 'mongoose'
import xss from 'xss'
import uses from '../database/json/medicine-use.json'
import medicines from '../database/json/medicine.json'

const Medicine = mongoose.model('Medicine')
const Use = mongoose.model('MedicineUse')


export async function getMedicine (_id) {
  const data = await Medicine
    .findOne({_id: _id})
    .exec()
  return data
}

export async function getMedicines (page, limit, search) {
  const data = await Medicine
    .find()
    .skip(Number(page - 1) * Number(limit))
    .limit(Number(limit))
    .sort({_id: -1})
    .exec()
  return data
}

export async function getMedicinesCount (search) {
  const data = await Medicine
    .count()
    .exec()
  return data
}

export async function getUse (_id) {
  const data = await Use
    .findOne({_id: _id})
    .exec()
  return data
}

export async function getUses (page, limit) {
  const data = await Use
    .find()
    .skip(Number(page - 1) * Number(limit))
    .limit(Number(limit))
    .exec()
  return data
}

export async function getUsesCount () {
  const data = await Use
    .count()
    .exec()
  return data
}

export async function getUseByTid (tid) {
  const data = await Use
    .findOne({tid: tid})
    .exec()
  return data
}

export async function importUses () {
  for (let item of uses) {
    const res = await getUseByTid(item.tid)
    if (!res) {
      let use = {}
      use = {
        name: xss(item.name),
        tid: item.tid
      }    
      await saveUse (use)
    }
  }
}

export async function getMedicineByNid (nid) {
  const data = await Medicine
  .findOne({nid: nid})
  .exec()
  return data
}

export async function getMedicinesByHospital () {
  const data = await Medicine
    .find()
    .exec()
  return data
}

export async function importMedicines () {
  for (let item of medicines) {
    const res = await getMedicineByNid(item.nid)
    if (!res) {
      let medicine = {}
      let uses = []
      let oldUse = JSON.parse(item.use)
      if (typeof(oldUse) === 'object') {
        for (let use of oldUse) {
          console.log(use)
          uses.push(use.Name)
        }
        medicine = {
          title: xss(item.title),
          nid: item.nid,
          type: item.type,
          use: uses
        }    
        await saveMedicine (medicine)
      }
    }
  }
}

export async function saveMedicine (medicine) {
  medicine = new Medicine(medicine)
  medicine = await medicine.save()
  return medicine
}

export async function saveUse (use) {
  use = new Use(use)
  use = await use.save()
  return use
}

export async function updateUse (use) {
  use = await use.save()
  return use
}

export async function delUse (use) {
  try {
    await use.remove()
  } catch (e) {
    e
  }
  return true
}

export async function updateMedicine (medicine) {
  medicine = await medicine.save()
  return medicine
}

export async function delMedicine (medicine) {
  try {
    await medicine.remove()
  } catch (e) {
    e
  }
  return true
}