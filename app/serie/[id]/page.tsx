import React from 'react'
import styles from "@/styles/singlePage.module.scss"
import { singleSerie } from '@/app/_config/fetchSingleData'
import { options } from '@/app/_config/fetchOptions'
import { SerieById } from '@/app/_types/types'
import MainSingleSerie from '@/app/_components/MainSingleSerie'

interface Props {
  params: { id: string }
}

const getSerie = async (id: string) => {
  const res = await fetch(singleSerie(id), options)
  const data: Promise<SerieById> = res.json()
  return data
}

const Serie = async ({ params }: Props) => {
  const serie = await getSerie(params.id)

  return (
    <section className={styles.section}>
      <MainSingleSerie serie={serie}/>
    </section>
  )
}

export default Serie