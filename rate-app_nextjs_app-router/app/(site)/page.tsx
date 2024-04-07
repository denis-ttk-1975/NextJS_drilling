'use client';

import { Button, Htag, Paragraph, Tag, Rating } from '@/components';
import type { Metadata } from 'next';

import { useState } from 'react';
// import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Создать приложение Next',
  description: 'мое приложение на Next.js',
};
export default function Home(): JSX.Element {

    const [rating, setRating] = useState(1);
  return (
<>
<Htag tag = {'h1'}>App Router новый</Htag>

<Htag tag = {'h1'}>Наименование 111</Htag>
<Htag tag = {'h2'}>Наименование 222</Htag>
<Htag tag = {'header_title'}>Наименование Title Header</Htag>
<div style = {{padding: 10}}><Button appearance='primary' arrow = 'right'>Отправить!!! :) !!!</Button></div>
<div style = {{padding: 10}}><Button appearance='like'>Л</Button></div>
<div style = {{padding: 10}}><Button appearance='ghost' arrow = 'down'>Привидение</Button></div>

<Paragraph>Средний размерчик </Paragraph>
<Paragraph typography = 'large' >Большой размерчик </Paragraph>
<Paragraph typography = 'small' >Малый размерчик </Paragraph>

<Tag size = 'small'>Ghost</Tag>
<Tag size = 'small' color = 'red' href = 'www.google.com'>Red</Tag>
<Tag size = 'small' color = 'green'>Green</Tag>
<Tag size = 'small' color = 'primary'>Purple</Tag>
<Tag size = 'small' color = 'grey'>Grey</Tag>

<Rating rating = {rating} isEditable setRating = {setRating}/>


</>
  );
}
