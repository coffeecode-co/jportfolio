import {
  type ProjectImageType,
  DetailProject,
} from '@/components/DetailProject';
import { NavBar } from '@/components/NavBar';

const projectImages: ProjectImageType[] = [
  { src: 'https://picsum.photos/320/180', alt: 'img1' },
  { src: 'https://picsum.photos/320/181', alt: 'img2' },
  { src: 'https://picsum.photos/320/182', alt: 'img3' },
  { src: 'https://picsum.photos/320/183', alt: 'img4' },
];

export default function Page() {
  return (
    <section className="h-screen">
      <NavBar from="contact" />
      <DetailProject images={projectImages} />
    </section>
  );
}
