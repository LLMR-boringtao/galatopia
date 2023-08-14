export default function ({ store, redirect}) {
  console.log('auth middleware',store.state.user)
  if (!store.state.user || !store.state.user.phone) {
    return redirect('/login')
  }
  
  if (store.state.user.role !== 'admin') {
    return redirect('/auth')
  }
}