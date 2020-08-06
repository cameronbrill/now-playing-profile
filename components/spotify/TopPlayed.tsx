import React from 'react';
 import ReadmeImg from '../ReadmeImg';
 import Text from '../Text';

  export interface Props {
   trackLists: Array<Object>,
 }

  export const TopPlayed: React.FC<Props> = ({
   trackLists,
 }) => {
   return (
     <ReadmeImg
       width="800"
       height="413">
       <style>
         {`
           .top-played-wrapper {
             display: flex;
             justify-content: space-around;
           }
           img:not([src]) {
             content: url("data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==");
             border-radius: 6px;
             background: #FFF;
             border: 1px solid #e1e4e8;
           }
           a {
             color: inherit;
             cursor: pointer;
             text-decoration: none;
           }
           p {
             display: block;
             opacity: 0;
           }
           .track {
             display: flex;
             align-items: center;
             max-width: 250px;
             background: rgb(0,0,0,.01);
             border-radius: .3rem;
             margin: .5rem;
             padding: .5rem;
             border: 1px solid rgb(0,0,0,.1);
           }
           .track .details {
             display: flex;
             flex: 1;
             flex-direction: column;
             margin-top: -4px;
             margin-left: 8px;
           }
           .name,
           .artist {
             width: 180px;
             white-space: nowrap;
             overflow: hidden;
             text-overflow: ellipsis;
           }
           .name,
           .artist,
           .cover,
           .title {
             opacity: 0;
             animation: appear 300ms ease-out forwards;
           }
           .title {
             animation-delay: 0ms;
             text-align: center;
             margin: .5rem;
           }
           .name {
             animation-delay: 400ms;
           }
           .artist {
             animation-delay: 500ms;
           }
           .cover {
             animation-name: cover-appear;
             animation-delay: 300ms;
             box-shadow: 0 1px 3px rgba(0,0,0,0.1), 0 3px 10px rgba(0,0,0,0.05);
           }
           .cover:not([src]) {
             box-shadow: none;
           }
           @keyframes cover-appear {
             from {
               opacity: 0;
               transform: scale(0.8);
             }
             to {
               opacity: 1;
               transform: scale(1);
             }
           }
           @keyframes appear {
             from {
               opacity: 0;
               transform: translateX(-8px);
             }
             to {
               opacity: 1;
               transform: translateX(0);
             }
           }
           @keyframes progress {
             from {
               transform: scaleX(0)
             }
             to {
               transform: scaleX(1)
             }
           }
         `}
       </style>
       <div className="top-played-wrapper">
         {trackLists.map((list, term) => (
           <div
             key={term}
             className="top-played-container">
             <Text
               className="title"
               weight="bold"
               size="title"
               color="grey">
               {term === 0 ? 'All Time Favorites' : term === 1 ? 'Monthly Favorites' : 'Current Favorites'}
             </Text>

              {list.map((track, trackIndex) => (
               <a
                 key={`${term}-${trackIndex}`}
                 className="track"
                 href={track.href}>
                 <img
                   className="cover"
                   src={track.cover ?? null}
                   width="48"
                   height="48" />
                 <div className="details">
                   <Text 
                     className="name"
                     weight="bold">
                     {`${track.track ?? ""} `.trim()}
                   </Text>

                    <Text
                     className="artist"
                     color="grey">
                     {track.artist}
                   </Text>  
                 </div>
               </a>
             ))}
           </div>
         ))}
       </div>
     </ReadmeImg>
   );
 };