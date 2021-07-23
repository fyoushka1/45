import React from 'react'
import ContentLoader from 'react-content-loader'

function LoadingCard() {
    return (
        <ContentLoader 
        speed={2}
        width={1130}
        height={406}
        viewBox="0 0 1130 406"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="1" rx="0" ry="0" width="285" height="408" /> 
        <rect x="289" y="80" rx="0" ry="0" width="620" height="42" /> 
        <rect x="308" y="170" rx="0" ry="0" width="493" height="14" /> 
        <rect x="308" y="190" rx="0" ry="0" width="493" height="14" /> 
        <rect x="308" y="210" rx="0" ry="0" width="493" height="14" /> 
        <rect x="498" y="265" rx="0" ry="0" width="5" height="0" /> 
        <rect x="320" y="276" rx="0" ry="0" width="67" height="22" /> 
        <rect x="401" y="276" rx="0" ry="0" width="68" height="23" /> 
        <rect x="294" y="335" rx="19" ry="19" width="215" height="47" /> 
        <circle cx="559" cy="358" r="25" />
      </ContentLoader>
    )
}

export default LoadingCard
