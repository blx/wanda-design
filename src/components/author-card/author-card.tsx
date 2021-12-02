import { useEffect, useState } from 'react'
import { Avatar, Stack, Text } from '@wonderflow/react-components'
import clsx from 'clsx'
import { formatRole } from '@/utils/formatters'
import { motion } from 'framer-motion'

import { AuthorCard as AuthorCardClass, AuthorInfo } from './author-card.module.css'

type AuthorCardProps = PropsWithClass & {
  avatar?: string;
  name: string;
  role?: string;
  collapsed?: boolean;
}

const variants = {
  open: { opacity: 1, x: 0, width: 'auto', marginLeft: 8, marginRight: 8 },
  closed: { opacity: 0, x: -5, width: 0, marginLeft: 0, marginRight: 0 }
}

export const AuthorCard = ({
  avatar,
  name,
  role,
  className,
  collapsed = false,
  ...props
}: AuthorCardProps) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(collapsed)

  useEffect(() => {
    setIsCollapsed(collapsed)
  }, [collapsed])

  return (
    <Stack
      className={clsx(AuthorCardClass, className)}
      direction="row"
      verticalAlign="center"
      horizontalAlign="start"
      fill={false}
      onMouseEnter={() => collapsed && setIsCollapsed(false)}
      onMouseLeave={() => collapsed && setIsCollapsed(true)}
      style={{ lineHeight: 1 }}
      {...props}
    >
      <Avatar src={avatar} />
      <motion.div
        className={AuthorInfo}
        variants={variants}
        initial={isCollapsed ? 'closed' : undefined}
        animate={!isCollapsed ? 'open' : undefined}
        transition={{ duration: 0.2 }}
      >
        <Stack rowGap={2}>
          <Text size={16} weight="bold">{name}</Text>
          {role && <Text size={14} dimmed={5}>{formatRole(role)}</Text>}
        </Stack>
      </motion.div>
    </Stack>
  )
}
