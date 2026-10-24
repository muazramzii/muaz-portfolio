import { motion } from 'framer-motion'

export default function Splash() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 0.9, ease: 'easeInOut' }}
      onAnimationComplete={(d) => {
        if (d.opacity === 0) {
          const el = document.getElementById('splash-root')
          if (el) el.style.display = 'none'
        }
      }}
      id="splash-root"
      className="fixed inset-0 z-[9999] grid place-items-center"
      style={{ background: 'var(--bg)' }}
    >
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-display text-[2.6rem] font-bold tracking-tight text-strong"
        >
          Muaz<span className="text-accent">.</span>
        </motion.div>
        <div className="mx-auto mt-5 h-0.5 w-[180px] overflow-hidden rounded-full" style={{ background: 'var(--border)' }}>
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '350%' }}
            transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
            className="h-full w-2/5 rounded-full"
            style={{ background: 'var(--gradient)' }}
          />
        </div>
      </div>
    </motion.div>
  )
}
