import React from "react";
import { TeamMember } from "../components/TeamMember";

const members = [
  {
    name: "Juan Carlos",
    position: "CEO",
    image: require("../images/team-member-01.jpg").default,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    links: [
      {
        url: "",
        name: "Twitter",
      },

      {
        url: "",
        name: "Github",
      },
    ],
  },

  {
    name: "Juan Carlos 2",
    position: "CTO",
    image: require("../images/team-member-02.jpg").default,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    links: [
      {
        url: "",
        name: "Twitter",
      },

      {
        url: "",
        name: "Github",
      },
    ],
  },
];

const Team = () => {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2">The humans behind the product</h2>
          </div>

          {/* Team members */}
          <div
            className="max-w-sm sm:max-w-5xl mx-auto sm:flex sm:flex-wrap sm:justify-center -my-6 sm:-my-8 sm:-mx-3"
            data-aos-id-team
          >
            {members.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                position={member.position}
                image={member.image}
                description={member.description}
                links={member.links}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
