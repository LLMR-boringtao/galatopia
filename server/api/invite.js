import mongoose from 'mongoose'
import xss from 'xss'

const Invite = mongoose.model('Invite')

export async function getInvite (_id) {
  const data = await Invite
    .findOne({_id: _id})
    .populate('expert')
    .exec()
  return data
}

export async function getInviteByInvite (num) {
  const data = await Invite
    .findOne({title: num})
    .populate('expert')
    .exec()
  return data
}

export async function getInvites (page, limit, search) {
  const data = await Invite
    .find()
    .skip(Number(page - 1) * Number(limit))
    .limit(Number(limit))
    .populate('user')
    .sort({_id: -1})
    .exec()
  return data
}

export async function getInvitesCount (search) {
  const data = await Invite
    .count()
    .exec()
  return data
}

export async function getInviteByNid (nid) {
  const data = await Invite
  .findOne({nid: nid})
  .exec()
  return data
}

export async function getInviteByUser (uid) {
  const data = await Invite
    .findOne({user: uid})
    .exec()
  return data
}

export async function saveInvite (invite) {
  invite = new Invite(invite)
  invite = await invite.save()
  return invite
}

export async function updateInvite (invite) {
  invite = await invite.save()
  return invite
}

export async function delInvite (invite) {
  try {
    await invite.remove()
  } catch (e) {
    e
  }
  return true
}