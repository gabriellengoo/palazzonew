// ~/components/LayoutPreview.js
import React from 'react'

const layoutImages = {
    layout1: '/layout1-preview.png', // Relative path to static folder
    layout2: '/layout2-preview.png',
    layout3: '/layout3-preview.png',
}

const LayoutPreview = ({ layoutType }) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      {layoutType && (
        <img
          src={layoutImages[layoutType]}
          alt={`${layoutType} preview`}
          style={{ width: '100%', borderRadius: '8px' }}
        />
      )}
    </div>
  )
}

export default LayoutPreview
