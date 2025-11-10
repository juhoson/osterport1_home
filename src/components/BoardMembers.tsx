import React from 'react';
import { BoardMember } from '../types/content';
import './BoardMembers.css';

interface BoardMembersProps {
  members: BoardMember[];
}

const BoardMembers: React.FC<BoardMembersProps> = ({ members }) => {
  return (
    <div className="board-members">
      {members.map((member, index) => (
        <div key={index} className="board-member">
          <div className="member-info">
            <h3 className="member-name">{member.name}</h3>
            <p className="member-role">{member.role}</p>
          </div>
          <a href={`tel:${member.phone}`} className="member-phone">
            {member.phone}
          </a>
        </div>
      ))}
    </div>
  );
};

export default BoardMembers;
