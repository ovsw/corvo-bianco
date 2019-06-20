import { Link } from 'gatsby'
import React from 'react'
import ProjectPreview from './project-preview'

function ProjectPreviewGrid({ title, browseMoreHref, nodes }) {
  return (
    <div>
      {title && <h2>{browseMoreHref ? <Link to={browseMoreHref}>{title}</Link> : title}</h2>}
      <ul>
        {nodes &&
          nodes.map(node => (
            <li key={node.id}>
              <ProjectPreview {...node} />
            </li>
          ))}
      </ul>
      {browseMoreHref && (
        <div>
          <Link to={browseMoreHref}>Browse more</Link>
        </div>
      )}
    </div>
  )
}

ProjectPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: '',
}

export default ProjectPreviewGrid
