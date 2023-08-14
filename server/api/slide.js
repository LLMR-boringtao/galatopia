import mongoose from 'mongoose'
const Slide = mongoose.model('Slide')

export async function getSlides() {
  const slides = await Slide
    .find({})
    .sort({_id: -1})
    .exec()
  return slides
}

export async function getSlide(_id) {
  const data = await Slide
    .findOne({
      _id: _id
    })
    .exec()
  return data
}

export async function save(slide) {
  slide = new Slide(slide)
  slide = await slide.save()

  return slide
}

export async function update(slide) {
  slide = await slide.save()

  return slide
}

export async function del(slide) {
  try {
    await slide.remove()
  } catch (e) {
    console.log(e)
  }
  return true
}
