import { useState } from 'react';
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard';

const users = [
  {
    userName: "UranousCougar",
    name: "Erick Octavio Nolasco",
    isFollowing: true,
  },
  {
    userName: "esme-paleta",
    name: "Esmeralda Estrada Garcia",
    isFollowing: false,
  },
  {
    userName: "alanc00",
    name: "Alan Cortez",
    isFollowing: true,
  },
  {
    userName: "curasa99",
    name: "Rafael Salazar",
    isFollowing: false,
  },
];

export function App()
{
  
  return (
    <section className="App">
      {
        users.map( ( { userName, name, isFollowing } ) =>{ 
          return (
            <TwitterFollowCard
              key={userName}
              username={userName}
              initialIsFollowing={isFollowing}>
              { name }
            </TwitterFollowCard>)
        } )
      }

    </section>
  );
}
