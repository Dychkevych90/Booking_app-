import styled from 'styled-components';

const PropertyListItem = styled.div`
  flex:1;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;

  .pListImg{
    width: 100%;
    height: 150px;
    object-fit: cover;
  }

  .pListTitles>h1{
    font-size: 18px;
    color: #444;
    text-transform: capitalize;
  }

  .pListTitles>h2{
    font-size: 14px;
    font-weight: 300;
  }
`;

const PropertyListWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
`;

export {
  PropertyListItem,
  PropertyListWrapper
};
