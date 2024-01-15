import {css} from 'lit';

export const sharedDesignStyles = css `
  .design-button {
    cursor: pointer;
    background-color: var(--color-primary-solid-10);
    border: none;
    border-radius: var(--border-radius-8);
    color: white;
    padding: var(--space-16) var(--space-32);
    text-align: center;
    font-size: 16px;
    opacity: 0.9;
  }

  .design-button:hover {
    box-shadow: var(--shadow-raised);
    opacity: 1;
  }
`;