import { motion } from 'framer-motion';
import { fadeIn, slideIn, staggerChildren } from '../data/animations';
import { workExperience, WorkExperienceItem } from '../data/workExperience';

function WorkExperienceListItem({
  item,
  isLast,
}: {
  item: WorkExperienceItem;
  isLast: boolean;
}) {
  return (
    <motion.div variants={slideIn}>
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block transition-transform duration-300 hover:scale-105 cursor-pointer"
      >
        <div className="flex items-center py-3">
          <div className="w-6 h-6 mr-3 flex items-center justify-center">
            <img
              src={item.logo}
              alt={`${item.company} logo`}
              className="rounded-md object-cover w-6 h-6 border-gray-200/20"
            />
          </div>

          <div className="flex-1">
            <div className="flex items-baseline flex-wrap gap-x-2">
              <span className="font-semibold font-manrope">{item.company}</span>
              <span className="text-gray-500 font-manrope text-xs">
                {item.role}
              </span>
            </div>
          </div>

          <div className="text-gray-500 font-manrope text-sm">
            {item.period}
          </div>
        </div>
      </a>

      {!isLast && (
        <div className="border-b border-dashed border-purple-300"></div>
      )}
    </motion.div>
  );
}

export function WorkExperience() {
  return (
    <motion.div
      className="space-y-4 pb-16 text-left font-instrument-sans"
      variants={fadeIn}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="text-2xl font-normal" variants={slideIn}>
        Work
      </motion.div>

      <motion.div className="space-y-0" variants={staggerChildren}>
        {workExperience.map((item, index) => (
          <WorkExperienceListItem
            key={item.company}
            item={item}
            isLast={index === workExperience.length - 1}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}