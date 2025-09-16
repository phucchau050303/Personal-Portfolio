import React from 'react';
import PropTypes from 'prop-types';

const GradientButton = ({ href, children }) => (
  <a
    href={href}
    className="gradient-btn"
    style={{
      display: 'inline-block',
      textDecoration: 'none',
      borderRadius: '0.5rem',
      padding: '0.75rem 2rem',
      fontWeight: 600,
      fontSize: '1.1rem',
      boxShadow: '0 4px 24px 0 rgba(180,200,255,0.35)',
      transition: 'transform 0.2s, box-shadow 0.2s',
    }}
  >
    {children}
  </a>
);

GradientButton.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default GradientButton;
