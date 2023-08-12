export default function ({store, route, redirect}) {
  if (!store.state.authUser) {
    let { fullPath } = route
    fullPath = encodeURIComponent(fullPath.substr(1))
    const path = '/wechat-redirect?visit=' + fullPath
    return redirect(path)
  }
}
