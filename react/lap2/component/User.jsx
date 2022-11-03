const User = ({user}) => {
  if (user) {
    return(
        <div> 
            {user.name}
            <button>Logout</button>
            {user.isAdmin && <button>Truy cập trang admin</button>}
        </div>
    )
  } else {
    return(
        <div>
            <button>Đăng nhập</button>
            <button>Đăng ký</button>
        </div>
    )
  }
}
User.propTypes = PropTypes.exact({
  name: PropTypes.string,
  isAdmin: PropTypes.bool,
})


// Nếu có User thì hiện thị tên user và nút Logout
// Nếu user có isAdmin là true thì hiện thị nút truy cập trang admin
// Nếu ko có User thì hiện thị nút đăng nhập đăng ký