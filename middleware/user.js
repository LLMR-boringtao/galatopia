export default function ({ store, redirect}) {
  if (!store.state.user || !store.state.user.name) {
    return redirect('/userlogin')
  }
}