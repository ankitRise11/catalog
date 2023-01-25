import React from "react";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

const Sidebar = () => {
  return (
    <div className="d-flex">
      <div>
        <h4 className="px-4 py-2">Categories</h4>
        <Navigation
          // you can use your own router's api to get pathname
          activeItemId="/management/members"
          onSelect={({ itemId }) => {
            // maybe push to the route
          }}
          items={[
            {
              title: "Food",
            },
            {
              title: "Travel",
            },
            {
              title: "Music",
            },
            {
              title: "Gaming",
            },
            {
              title: "Art",
            },
            {
              title: "Health & Wellness",
            },
            {
              title: "Fashion",
            },
            {
              title: "Education",
            },
            {
              title: "Politics",
            },
            {
              title: "Technology",
            },
            {
              title: "Business",
            },
            {
              title: "Sports",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Sidebar;
