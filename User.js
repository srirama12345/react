import user from "./user.css";
import { Component } from "react";
const initialData = [
  {
    title: "Nickelson and Sons",
    icon_url: "http://loremflickr.com/640/480",
    link: "https://gaseous-pod.net",
    description: "Eligendi cum eligendi nemo accusamus natus vero dolor.",
    category: "Automotive",
    tag: "request",
    id: "1"
  },
  {
    title: "Parker LLC",
    icon_url:
      "https://images.unsplash.com/photo-1549776904-3ec1fcd4b13b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8NjQwKjQ4MHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    link: "http://unkempt-driver.net",
    description: "Fuga consequuntur sed.",
    category: "Music",
    tag: "user",
    id: "2"
  },
  {
    title: "Strosin - Langosh",
    icon_url:
      "https://images.unsplash.com/photo-1512093266765-564111bfb15f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fDY0MCo0ODB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    link: "http://good-rutabaga.org",
    description: "Ut voluptatibus natus sed doloribus quasi illo praesentium.",
    category: "Beauty",
    tag: "request",
    id: "3"
  },
  {
    title: "Marvin Group",
    icon_url:
      "https://images.unsplash.com/photo-1553656168-a0327b277c6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fDY0MCo0ODB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    link: "http://hefty-specialty.info",
    description:
      "Quisquam ex voluptatem maiores nobis nostrum iusto nihil excepturi ut.",
    category: "Sports",
    tag: "user",
    id: "4"
  }
];
class User extends Component {
  render() {
    return (
      <div className="b">
        <div className="bg2">
          <h1>Item Details</h1>
          <div className="details">
            <p>Item name</p>
            <input type="text" className="input" />
            <p>Link</p>
            <input type="text" className="input" />
            <p>Resource name</p>
            <input type="text" className="input" />
            <p>Description</p>
            <input type="text" className="input" />
            <button className="but">Create</button>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1549776904-3ec1fcd4b13b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8NjQwKjQ4MHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          className="img1"
        />
      </div>
    );
  }
}
export default User;
