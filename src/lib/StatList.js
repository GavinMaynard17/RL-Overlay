// let events = []

// export default function handleStatFeed(update) {
//   addStatFeedEvent(update);

//   function addStatFeedEvent(update) {
//     let newStat = { ...update };
//     newStat.id = nonce(8);
//     newStat.disappearing = false;
//     setTimeout(() => {
//       newStat.disappearing = true;
//     }, 3000);
//     events.push(newStat);
//     store.dispatch(updateStatFeed({ ...events }));
//     setTimeout(() => {
//       removeStatFeedEvent(newStat);
//     }, 3500);
//   }

//   function removeStatFeedEvent(data) {
//     let index = events.map((event) => event.id).indexOf(data.id);
//     events.splice(index, 1);
//     store.dispatch(updateStatFeed({ ...events }));
//   }
// }

// const StatFeed = ({ gamestate, statfeed }) => {
//     const stats = Object.keys(statfeed).map((stat) => {
//       return (
//         statfeed[stat]?.id && (<Stat key={statfeed[stat]?.id} stat={statfeed[stat]} />)
//       );
//     });
//     return !gamestate.showreplay && <div className="stat-container">{stats}</div>;
//   };

//   const Stat = ({ stat, gamestate }) => {
//     const animatedConfig = {
//       mass: 2,
//       tension: 600,
//       friction: 50,
//     };
//     const animatedProps = useSpring({
//       config: animatedConfig,
//       transform: !stat.disappearing
//         ? 'translate(0px, 0px)'
//         : 'translate(0px, -200px)',
//       from: {
//         transform: !stat.disappearing
//           ? 'translate(200px, 0px)'
//           : 'translate(0px, 0px)',
//       },
//     });
//     return stat.data.secondary_target.name ? (
//       <Transition timeout={3500} mountOnEnter unmountOnExit in={!stat.disappearing}>
//         <animated.div className="stat-anim" style={animatedProps}>
//           // SVG or div/HTML etc for events with secondary_target (demos) goes here:
//             <SVG />
//         </animated.div>
//       </Transition>)
//       :
//       <Transition timeout={3500} mountOnEnter unmountOnExit in={!stat.disappearing}>
//         <animated.div className="stat-anim" style={animatedProps}>
//           // SVG or div/HTML etc for all other events goes here:
//             <SVG />
//         </animated.div>
//       </Transition>
//   };

// THIS HURTS MY HEAD
// "STAT CHIP COMPONENT"