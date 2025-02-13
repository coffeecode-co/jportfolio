'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { type PointerEvent, type RefObject, useRef } from 'react';
import Image from 'next/image';

import { AspectRatio } from './ui/aspect-ratio';
import { Button } from './ui/button';
import { motion } from 'motion/react';

import { ChevronRight } from 'lucide-react';

import type { GalleryItem } from './MyProjects';

interface ProjectThumbnailProp {
  item: GalleryItem;
}
interface CustomAnimateElementAttr extends NamedNodeMap {
  wasanimate?: string;
}

const setAnimate = (
  event: PointerEvent,
  elmRef: RefObject<HTMLDivElement | null>
) => {
  if (!navigator.userAgent.toLocaleLowerCase().includes('mobile')) return;
  const target = elmRef.current;
  if (!target) return;

  const targetAttrs: CustomAnimateElementAttr = target.attributes;
  if (!targetAttrs.wasanimate) {
    target.setAttribute('wasanimate', 'true');
  }
};

const removeAnimate = (
  event: PointerEvent,
  elmRef: RefObject<HTMLDivElement | null>
) => {
  if (!navigator.userAgent.toLocaleLowerCase().includes('mobile')) return;
  const target = elmRef.current;
  if (!target?.parentElement) return;
  const parentChildrens = target.parentElement.children;
  for (const item of parentChildrens) {
    const itemAttrbutes: CustomAnimateElementAttr = item.attributes;
    if (!itemAttrbutes.wasanimate) continue;
    event.stopPropagation();
    item.removeAttribute('wasanimate');
    return;
  }
};

export const ProjectThumbnail = ({ item }: ProjectThumbnailProp) => {
  const { projectName, imgUrl, alt, url } = item;
  const elmRef = useRef<HTMLDivElement>(null);
  return (
    <div
      key={projectName}
      className="w-full m-3 rounded-lg border-2 border-muted-foreground overflow-hidden"
      ref={elmRef}
    >
      <AspectRatio ratio={4 / 3}>
        <motion.div
          className="w-full h-full"
          whileTap={{ scale: 1.1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          onPointerDownCapture={(e) => {
            setAnimate(e, elmRef);
          }}
        >
          <Image
            src={imgUrl}
            alt={alt}
            className="rounded-md object-cover mx-auto w-full"
            height={300}
            width={400}
          />

          <motion.div
            className="absolute inset-0 bg-primary/70 flex items-end justify-center opacity-0 py-7"
            whileTap={{ opacity: 1 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            onPointerUpCapture={(e) => {
              removeAnimate(e, elmRef);
            }}
          >
            <ProjectCaption url={url} />
          </motion.div>
        </motion.div>
      </AspectRatio>
    </div>
  );
};

const ProjectCaption = ({ url }: { url: string }) => {
  const t = useTranslations('MyProjects');

  return (
    <div>
      <Link href={url} target="_blank">
        <Button variant={'outline'} className="border border-primary">
          {t('projectBtn')} <ChevronRight />
        </Button>
      </Link>
    </div>
  );
};
