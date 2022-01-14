import { Stack, Text, Title, Table, Button } from '@wonderflow/react-components'
import { QuickLinks } from '@/components/quicklinks'
import { Hero as HeroClass, Video, Content } from './hero.module.css'

export const Hero = () => {
  const columns: any = [
    {
      name: 'ID',
      selector: (row: any) => row.id,
      width: '80px',
      sortable: true,
      reorder: true
    },
    {
      name: 'First column',
      selector: (row: any) => row.someKey,
      sortable: true,
      reorder: true,
      hide: 'sm'
    },
    {
      name: 'Second column',
      selector: (row: any) => row.anotherKey,
      sortable: true,
      reorder: true,
      hide: 'md'
    },
    {
      name: 'Value',
      selector: (row: any) => row.value,
      sortable: true,
      reorder: true,
      right: true
    }
  ]

  const data = [
    {
      id: 1,
      someKey: 'Some data to print',
      anotherKey: 'Another key data',
      value: 123
    },
    {
      id: 2,
      someKey: 'Some data to print 2',
      anotherKey: 'Another key data 2',
      value: 1234
    },
    {
      id: 3,
      someKey: 'Some data to print 3',
      anotherKey: 'Another key data 3',
      value: 5324
    },
    {
      id: 4,
      someKey: 'Some data to print 4',
      anotherKey: 'Another key data 4',
      value: 124
    },
    {
      id: 5,
      someKey: 'Some data to print',
      anotherKey: 'Another key data',
      value: 123
    },
    {
      id: 6,
      someKey: 'Some data to print 2',
      anotherKey: 'Another key data 2',
      value: 1234
    },
    {
      id: 7,
      someKey: 'Some data to print 3',
      anotherKey: 'Another key data 3',
      value: 5324
    },
    {
      id: 8,
      someKey: 'Some data to print 4',
      anotherKey: 'Another key data 4',
      value: 124
    },
    {
      id: 9,
      someKey: 'Some data to print 3',
      anotherKey: 'Another key data 3',
      value: 5324
    },
    {
      id: 10,
      someKey: 'Some data to print 4',
      anotherKey: 'Another key data 4',
      value: 124
    },
    {
      id: 11,
      someKey: 'Some data to print',
      anotherKey: 'Another key data',
      value: 123
    },
    {
      id: 12,
      someKey: 'Some data to print 2',
      anotherKey: 'Another key data 2',
      value: 1234
    },
    {
      id: 13,
      someKey: 'Some data to print 3',
      anotherKey: 'Another key data 3',
      value: 5324
    },
    {
      id: 14,
      someKey: 'Some data to print 4',
      anotherKey: 'Another key data 4',
      value: 124
    }
  ]
  return (
    <Stack className={HeroClass} verticalAlign="end" fill={false}>
      <video
        className={Video}
        autoPlay
        loop
        muted
        playsInline
        height="220"
        width="390"
        poster="/hero-poster.png"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <Stack rowGap={160} className={Content}>
        <Stack rowGap={32} horizontalAlign="start" inline>
          <Title level="display">Wanda</Title>
          <Text size={28} maxWidth="50ch">
            <Table
              noHeader={false}
              title={<Title level="5">Sample Title</Title>}
              columns={columns}
              data={data}
              selectableRows
              actions={<Button kind="secondary">See more</Button>}
              contextActions={<Button>Delete</Button>}
              pagination
              paginationPerPage={3}
            />
            Wanda is Wonderflow’s open-source design system built for digital products and experiences.
          </Text>
        </Stack>
        <QuickLinks />
      </Stack>
    </Stack>
  )
}
