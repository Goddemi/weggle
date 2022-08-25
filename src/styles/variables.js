import { css } from 'styled-components';

const variables = {
  flex: (direction = 'row', justify = 'center', align = 'center') => `
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
  `,

  absoluteCenter: css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,

  registerBox: (width = '1385px', height = '23px') => `
    width: ${width};
    height: ${height};
    display: flex;
    align-items: center;
    // border-radius:4px;
    padding: 16.5px 14px;
    border: 1px solid #dadada;
  
  `,

  subMenuTitleWidth: css`
    width: 200px;
    font-size: 13px;
  `,
};

export default variables;
