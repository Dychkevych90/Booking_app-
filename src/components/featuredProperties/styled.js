import styled from 'styled-components';

const FeaturedPropertiesWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
`;

const FeaturedPropertiesItem = styled.div`
  flex: 1;
  gap: 10px;
  display: flex;
  flex-direction: column;

  .fpImg{
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  .fpName{
    color: #333;
    font-weight: bold;
  }

  .fpCity{
    font-weight: 300;
  }

  .fpPrice{
    font-weight: 500;
  }

  .fpRating>button{
    background-color: #003580;
    color: white;
    border: none;
    padding: 3px;
    margin-right: 10px;
    font-weight: bold;
  }

  .fpRating>span{
    font-size: 14px;
  }
`;

export {
  FeaturedPropertiesWrapper,
  FeaturedPropertiesItem
};
