import './index.scss'
export default function Content({content}) {
  return (
    <div className={'content'} dangerouslySetInnerHTML={{__html: content}}/>
  )
}