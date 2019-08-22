import React from 'react'
import { Link } from 'react-router-dom'

export default function () {
  return (
    <ol vocab="http://schema.org/" typeof="BreadcrumbList">
      <li property="itemListElement" typeof="ListItem">
        <Link property="item" typeof="WebPage" to="/electronica">
          <span property="name">Electrónica, Audio y Video</span>
        </Link>
        <meta property="position" content="1"/>
      </li>

      <li property="itemListElement" typeof="ListItem">
        <Link property="item" typeof="WebPage" to="/electronica/audio">
          <span property="name">Audio</span>
        </Link>
        <meta property="position" content="2"/>
      </li>

      <li property="itemListElement" typeof="ListItem">
        <Link property="item" typeof="WebPage" to="/electronica/audio/reproductores">
          <span property="name">Reproductores</span>
        </Link>
        <meta property="position" content="3"/>
      </li>

      <li property="itemListElement" typeof="ListItem">
        <Link property="item" typeof="WebPage" to="/electronica/audio/reproductores/ipod">
          <span property="name">iPod</span>
        </Link>
        <meta property="position" content="4"/>
      </li>

      <li property="itemListElement" typeof="ListItem">
        <Link property="item" typeof="WebPage" to="/electronica/audio/reproductores/ipod/32-gb">
          <span property="name">32 GB</span>
        </Link>
        <meta property="position" content="5"/>
      </li>
    </ol>
  )
}
