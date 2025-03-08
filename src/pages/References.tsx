import styled from 'styled-components';

const ReferencesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const MainContent = styled.main`
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const ReferencesTable = styled.table`
  width: 100%;
  margin-top: 1rem;
`;

const TableHeader = styled.thead`
  background-color: #3498db;
  color: white;
`;

const TableHeaderCell = styled.th`
  padding: 1rem;
  text-align: left;
  border-bottom: 2px solid #e0e0e0;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  
  &:hover {
    background-color: #e0e0e0;
  }
`;

const TableCell = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #e0e0e0;
`;

const PersonName = styled.div`
  font-weight: 600;
  font-size: 1.1rem;
  color: #2c3e50;
`;

const PersonTitle = styled.div`
  font-style: italic;
  margin: 0.3rem 0;
  color: #7f8c8d;
`;

const PersonContact = styled.div`
  color: #3498db;
`;

function References() {
    return (
        <ReferencesContainer>
            <MainContent>
                <SectionTitle>Professional References</SectionTitle>

                <ReferencesTable>
                    <TableHeader>
                        <tr>
                            <TableHeaderCell>Name</TableHeaderCell>
                            <TableHeaderCell>Position</TableHeaderCell>
                            <TableHeaderCell>Contact</TableHeaderCell>
                        </tr>
                    </TableHeader>
                    <tbody>
                    <TableRow>
                        <TableCell>
                            <PersonName>Iris Rosado</PersonName>
                        </TableCell>
                        <TableCell>
                            <PersonTitle>Data Team Manager, Ideon</PersonTitle>
                        </TableCell>
                        <TableCell>
                            <PersonContact>Iris.rosado@ideonapi.com</PersonContact>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            <PersonName>Thomas Cuthbert</PersonName>
                        </TableCell>
                        <TableCell>
                            <PersonTitle>Manager, Rutgers Learning Center</PersonTitle>
                        </TableCell>
                        <TableCell>
                            <PersonContact>tomcuth@rutgers.edu</PersonContact>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            <PersonName>Lena Sandberg-Golden</PersonName>
                        </TableCell>
                        <TableCell>
                            <PersonTitle>Professor @ Rutgers University</PersonTitle>
                        </TableCell>
                        <TableCell>
                            <PersonContact>lena.sandberggolden@rutgers.edu</PersonContact>
                        </TableCell>
                    </TableRow>
                    </tbody>
                </ReferencesTable>
            </MainContent>
        </ReferencesContainer>
    );
}

export default References;