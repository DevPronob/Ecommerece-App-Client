// constants.js

export const getBreadcrumbFromPath = () => {
    const currentPath = window.location.pathname;
    const pathSegments = currentPath.split('/').filter(segment => segment !== '');
    
    if (pathSegments.length > 0) {
      // Get the last segment of the path
      const lastSegment = pathSegments[pathSegments.length - 1];
      return lastSegment;
    }
  
    // Default value if no segment is found
    return 'Home';
  };
  