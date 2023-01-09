import Profile from './Profile';
import profile from './src/user.json';

export default function App (props) {
  return (
    <Profile 
      username={props.username}
      tag={props.tag}
      location={props.location}
      avatar={props.avatar}
      followers={props.stats.followers}
      views={props.stats.views}
      likes={props.stats.likes}
    />
  )
}

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
