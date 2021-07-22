import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';

const components = {
  em: ({ children }) => (
    <RoughNotation customElement="em" padding={3} type="underline" multiline>
      {children}
    </RoughNotation>
  ),
  strong: ({ children }) => (
    <RoughNotation
      customElement="strong"
      color="rgba(163,243,7, 0.3)"
      type="highlight"
      multiline
    >
      {children}
    </RoughNotation>
  ),
  p: ({ children }) => (
    <RoughNotationGroup show>
      <p style={{ position: 'relative' }}>{children}</p>
    </RoughNotationGroup>
  ),
};

export { components };
