'use client';

import Image from 'next/image';
import { AspectRatio } from './ui/aspect-ratio';

import { motion } from 'motion/react';

import type { GalleryItem } from './MyProjects';
import { Button } from './ui/button';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export const ProjectThumbnail = ({
  projectName,
  imgUrl,
  alt,
  url,
}: GalleryItem) => {
  return (
    <div
      key={projectName}
      className="w-full m-3 rounded-lg border-2 border-muted overflow-hidden"
    >
      <AspectRatio ratio={4 / 3}>
        <motion.div
          className="w-full h-full"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
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
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <ProjectCaption url={url} />
          </motion.div>
        </motion.div>
      </AspectRatio>
    </div>
  );
};

const ProjectCaption = ({ url }: { url: string }) => {
  return (
    <div>
      <Link href={url} target="_blank">
        <Button variant={'outline'} className="border border-primary">
          See more <ChevronRight />
        </Button>
      </Link>
    </div>
  );
};
