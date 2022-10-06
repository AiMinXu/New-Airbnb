import styled from 'styled-components'

export const SectionHeaderWapper = styled.div`
  color: #222;

  .text {
    display: flex;
    cursor: pointer;
  }

  .title {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  .subtitle {
    font-size: 16px;
    margin-bottom: 20px;
  }

  .right-icon{
    opacity: 0;
    margin: 20px 0 0 10px;
    transition: opacity 200ms ease;
  }

  &:hover{
    .right-icon{
      opacity: 1;
    }
  }
`
