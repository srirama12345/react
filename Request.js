import request from "./request.css";
import List from "./List.js";
import User from "./User.js";
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
class Request extends Component {
  state = {
    searchInput: "",
    usersDetailsList: initialData
  };

  onSearch = (event) => {
    this.setState({
      searchInput: event.target.value
    });
  };

  asc = (event) => {
    if (event.target.value === "asc") {
      this.setState({
        usersDetailsList: initialData.sort((a, b) =>
          a.title > b.title ? 1 : -1
        )
      });
    } else {
      this.setState({
        usersDetailsList: initialData.sort((a, b) =>
          a.title < b.title ? 1 : -1
        )
      });
    }
  };

  render() {
    const { searchInput, usersDetailsList } = this.state;
    const searchResults = usersDetailsList.filter((eachUser) =>
      eachUser.title.includes(searchInput)
    );
    const asc = (event) => {
      if (event.target.value === "asc") {
        searchResults.sort((a, b) => (a.title > b.title ? 1 : -1));
      } else {
        searchResults.sort((a, b) => (a.title < b.title ? 1 : -1));
      }
    };

    return (
      <div>
        <div className="request1">
          <h4>Items</h4>
          <div className="request2">
            <input
              type="search"
              placeholder="search"
              className="search1"
              onChange={this.onSearch}
              value={searchInput}
            />
            <select onChange={this.asc}>
              <option>sort</option>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        </div>
        <div className="c">
          <p>Item</p>
          <p>Description</p>
          <p>Link</p>
        </div>
        <ul>
          {searchResults.map((each) => (
            <List data={each} />
          ))}
        </ul>
        <button className="f" onclick={<User />}>
          Add Item
        </button>
        <button className="f">Delete Item</button>
      </div>
    );
  }
}
export default Request;
