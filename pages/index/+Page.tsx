import { Header } from "../../components/Header";
import { HeroSection } from "../../components/HeroSection";
import { IntroSection } from "../../components/IntroSection";
import { IdentitySection } from "../../components/IdentitySection";
import { PoliciesSection } from "../../components/PoliciesSection";
import { ValuesSection } from "../../components/ValuesSection";
import { ObjectivesSection } from "../../components/ObjectivesSection";
import { RolesSection } from "../../components/RolesSection";
import { MembersSection } from "../../components/MembersSection";
import { ScheduleSection } from "../../components/ScheduleSection";
import { Footer } from "../../components/Footer";

import "../../styles/globals.css";

export default function Page() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <IdentitySection />
      <PoliciesSection />
      <ValuesSection />
      <ObjectivesSection />
      <RolesSection />
      <MembersSection />
      {/*<ScheduleSection />*/}
    </>
  );
}
