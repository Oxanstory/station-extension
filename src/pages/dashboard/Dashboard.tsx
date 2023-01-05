import { useTranslation } from "react-i18next"
import classNames from "classnames/bind"
import { Col, Page } from "components/layout"
import Issuance from "./Issuance"
import CommunityPool from "./CommunityPool"
import StakingRatio from "./StakingRatio"
import Charts from "./Charts"
import styles from "./Dashboard.module.scss"

const cx = classNames.bind(styles)

const Dashboard = () => {
  const { t } = useTranslation()

  return (
    <Page title={t("Dashboard")}>
      <Col>
        <header className={cx(styles.header, { trisect: true })}>
          <Issuance />
          <CommunityPool />
          <StakingRatio />
        </header>

        <Charts />
      </Col>
    </Page>
  )
}

export default Dashboard
