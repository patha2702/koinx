import React from "react";
import TeamCard from "../TeamCard";
import { teamMemberDetails } from "@/constants";

const Team = () => {
  return (
    <section className="mt-4 space-y-4 rounded-lg bg-white p-6 flex flex-col justify-start items-start gap-2">
      <h2 className="text-2xl font-semibold">Team</h2>
      <div className="flex flex-col justify-start items-start gap-3">
        <p className="text-md tracking-tight leading-tight py-2">
          Maecenas venenatis sapien et enim malesuada, ac elementum velit
          auctor. Ut sed nunc ut dolor sodales scelerisque. Vivamus rhoncus
          sollicitudin odio, sit amet cursus neque vestibulum eget.
        </p>
      </div>
      {
        teamMemberDetails.map((item, index) =>{
          return (
            <TeamCard name={item.name} description={item.description} designation={item.designation} userImg={item.userImg} key={index} />
          )
        })
      }
    </section>
  );
};

export default Team;
