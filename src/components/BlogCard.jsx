import "./../assets/styles/card.css";

const BlogCard = ({ blog }) => {
  // const navigate = useNavigate();
  // const { _id, image, title, createdAt } = blog;

  // const handleEdit = () => {
  //   navigate(`/blog-update/${_id}`);
  // };

  // const handleDelete = async () => {
  //   try {
  //     const { data } = await axios.delete(
  //       `https://blog-app-zn8u.onrender.com/api/v1/blog/delete-blog/${_id}`
  //     );
  //     if (data?.success) {
  //       Swal.fire({
  //         position: "center",
  //         icon: "success",
  //         title: "Blog Deleted Successfully",
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //       navigate("/");
  //     }
  //   } catch (error) {
  //     if (error.response.data.message) {
  //       return toast.error(error.response.data.message);
  //     }
  //   }
  // };

  // const handleBlog = () => {
  //   navigate(`/blog-details/${_id}`);
  // };

  // let picture =
  //   image.length > 10
  //     ? image
  //     : `https://i0.wp.com/myblog.com.ng/wp-content/uploads/2020/01/IMG_2117-1.jpg?fit=860%2C435&ssl=1`;

  return (
    <div className="blog-card">
      <div className="card__header">
        <img src={image} alt="card__image" className="card__image" width="600" />
      </div>
      <div className="card__body">
        <div className="icons">
          {/* <div className="edit__icon">
            <BiSolidEdit color="info" onClick={handleEdit} size="25" />
          </div>
          <div className="delete__icon">
            <AiOutlineDelete onClick={handleDelete} size="25" />
          </div> */}
        </div>
      </div>
      <div className="card__footer">
        <div className="user">
          <div className="user__info">
            {/* <small>{formatDistanceToNow(new Date(createdAt), { addSuffix: true })}</small> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
