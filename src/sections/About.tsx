import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

export const About: React.FC = () => {
  
  const aug2021Ref = useRef(null);
  const jun2022Ref = useRef(null);
  const may2023Ref = useRef(null);
  const presentRef = useRef(null);

  const isAug2021InView = useInView(aug2021Ref, { once: true, margin: '-50% 0px' });
  const isJun2022InView = useInView(jun2022Ref, { once: true, margin: '-50% 0px' });
  const isMay2023InView = useInView(may2023Ref, { once: true, margin: '-50% 0px' });
  const isPresentInView = useInView(presentRef, { once: true, margin: '-50% 0px' });

  return (
    <div className="flex flex-col gap-2 mt-6 w-full">
      <div className="flex flex-row justify-center gap-2">
        <div className="flex flex-col justify-start items-end w-6/12">
          <motion.div
            ref={aug2021Ref}
            className="bg-primary text-black text-nowrap rounded-lg px-4"
            initial={{ scale: 1, opacity: 0 }}
            animate={
              isAug2021InView
                ? { scale: 1.35, opacity: 1 }
                : { scale: 1, opacity: 0 }
            }
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            AUG, 2021
            {isAug2021InView && (
              <motion.div
                className="mt-2 text-sm text-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Some additional information about August 2021.
              </motion.div>
            )}
          </motion.div>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="bg-secondary rounded-full p-1.5" />
          <span className="bg-primary p-0.5 h-52" />
          <div className="bg-secondary rounded-full p-1.5" />
        </div>
        <div className="flex flex-col justify-end items-start w-6/12">
          <motion.div
            ref={jun2022Ref}
            className="bg-primary text-black text-nowrap rounded-lg px-4"
            initial={{ scale: 1, opacity: 0 }}
            animate={
              isJun2022InView
                ? { scale: 1.35, opacity: 1 }
                : { scale: 1, opacity: 0 }
            }
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            JUN, 2022
            {isJun2022InView && (
              <motion.div
                className="mt-2 text-sm text-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Some additional information about June 2022.
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      <div className="flex flex-row justify-center gap-2">
        <div className="relative flex flex-col gap-[5px] justify-center items-center">
          <span className="bg-primary p-0.5 h-52" />
        </div>
      </div>

      <div className="flex flex-row justify-center gap-2">
        <div className="flex flex-col justify-start items-end w-6/12">
          <motion.div
            ref={may2023Ref}
            className="bg-primary text-black text-nowrap rounded-lg px-4"
            initial={{ scale: 1, opacity: 0 }}
            animate={
              isMay2023InView
                ? { scale: 1.35, opacity: 1 }
                : { scale: 1, opacity: 0 }
            }
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            MAY, 2023
            {isMay2023InView && (
              <motion.div
                className="mt-2 text-sm text-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Some additional information about May 2023.
              </motion.div>
            )}
          </motion.div>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="bg-secondary rounded-full p-1.5" />
          <span className="bg-primary p-0.5 h-52" />
          <div className="bg-secondary rounded-full p-1.5" />
        </div>
        <div className="flex flex-col justify-end items-start w-6/12">
          <motion.div
            ref={presentRef}
            className="bg-primary text-black text-nowrap rounded-lg px-4"
            initial={{ scale: 1, opacity: 0 }}
            animate={
              isPresentInView
                ? { scale: 1.35, opacity: 1 }
                : { scale: 1, opacity: 0 }
            }
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            PRESENT
            {isPresentInView && (
              <motion.div
                className="mt-2 text-sm text-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Some additional information about the present.
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
