import React from 'react';
import { Container, Divider, Form, Grid } from 'semantic-ui-react';

import { SECTIONS_LIST } from './constants';
import { TargetStandard } from '../TargetStandard';
import { Industry } from '../Industry';
import { Activities } from '../Activies';
import { ProductPages } from '../ProductPage';
import { Complexity } from '../Complexity';
import { SpecificContent } from '../SpecificContent';
import { InterfaceLanguages } from '../InterfaceLanguages';
import { Configurations } from '../Configurations';
import { Deliverables } from '../Deliverables';
import { Rates } from '../Rates';

import styles from './SectionList.module.css'

const SectionComponentMap = {
  [SECTIONS_LIST.TARGET_STANDARD]: <TargetStandard sectionType={SECTIONS_LIST.TARGET_STANDARD} />,
  [SECTIONS_LIST.INDUSTRY]: <Industry sectionType={SECTIONS_LIST.INDUSTRY} isOptional />,
  [SECTIONS_LIST.ACTIVITIES]: <Activities sectionType={SECTIONS_LIST.ACTIVITIES} />,
  [SECTIONS_LIST.PRODUCT_PAGES]: <ProductPages sectionType={SECTIONS_LIST.PRODUCT_PAGES} />,
  [SECTIONS_LIST.COMPLEXITY]: <Complexity sectionType={SECTIONS_LIST.COMPLEXITY} />,
  [SECTIONS_LIST.SPECIFIC_CONTENT]: <SpecificContent sectionType={SECTIONS_LIST.SPECIFIC_CONTENT} isOptional />,
  [SECTIONS_LIST.INTERFACE_LANGUAGES]: <InterfaceLanguages sectionType={SECTIONS_LIST.INTERFACE_LANGUAGES} />,
  [SECTIONS_LIST.CONFIGURATIONS]: <Configurations sectionType={SECTIONS_LIST.CONFIGURATIONS} />,
  [SECTIONS_LIST.DELIVERABLES]: <Deliverables sectionType={SECTIONS_LIST.DELIVERABLES} />,
  [SECTIONS_LIST.RATES]: <Rates sectionType={SECTIONS_LIST.RATES} isOptional />,
}

export const SectionsList = () => {
  const isLastElement = (index: number, array: SECTIONS_LIST[]) => index === array.length - 1;

  return (
    <Container className={styles.contentContainer}>
      <Grid>
        {Object.values(SECTIONS_LIST).map((section, index, array) => (
          SectionComponentMap[section] && (
            <Grid.Row key={section}>
              <Grid.Column>
                <Form>
                  {SectionComponentMap[section]}
                  {!isLastElement(index, array) && (
                    <Divider section className={styles.sectionDivider} />
                  )}
                </Form>
              </Grid.Column>
            </Grid.Row>
          )
        ))}
      </Grid>
    </Container>
  );
}
