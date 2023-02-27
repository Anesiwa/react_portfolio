import React from "react";
import styled from "styled-components";

const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const LeftSection = styled.div`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

const RightSection = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export function Navigation() {
  return (
    <div>
      <NavigationContainer>
        <LeftSection>
          <span>AA</span>
        </LeftSection>
        <RightSection>
          <span>Navigation Links</span>
        </RightSection>
      </NavigationContainer>
    </div>
  );
}
