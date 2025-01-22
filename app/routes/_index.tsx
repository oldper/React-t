import type { Route } from './+types/_index';
import { Welcome } from '~/welcome/welcome';
import { Header } from '~/components/Header';
import { Navigation } from '~/components/Navigation';
import {Service} from '~/components/Service'
import { CaseStudies } from '~/components/CaseStudies';
import { WorkFlow } from '~/components/WorkFlow';
import { Contact } from '~/components/Contact';
import { Footer } from '~/components/Footer';
export function meta({}: Route.MetaArgs) {
    return [{ title: 'New React Router App' }, { name: 'description', content: 'Welcome to React Router!' }];
}

export default function Home() {
    return (
        <div>
            <Header />
            <Navigation />
            <Service/>
            <CaseStudies />
            <WorkFlow />
            <Contact />
            <Footer />
        </div>
    );
}
