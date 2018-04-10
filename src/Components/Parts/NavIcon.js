import React from 'react';

const NavIcon = (props) => <a href={props.url}><img src={`/images/social/${props.name}.svg`} alt={props.name} /></a>

export default NavIcon;