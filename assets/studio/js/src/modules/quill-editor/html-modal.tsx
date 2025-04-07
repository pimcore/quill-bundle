import { Button, Modal, ModalFooter, TextArea } from '@pimcore/studio-ui-bundle/components'
import React, { useEffect, useState } from 'react'
import { useTranslation } from '@pimcore/studio-ui-bundle/app'

interface HtmlModalProps {
  open: boolean
  setOpen: (state: boolean) => void
  html: string
  save: (code: string) => void
}

export const HtmlModal = ({ open, setOpen, html, save }: HtmlModalProps): React.JSX.Element => {
  const { t } = useTranslation()

  const [value, setValue] = useState(html)

  useEffect(() => {
    setValue(html)
  }, [html])

  return (
    <Modal
      footer={ <ModalFooter>
        <Button
          danger
          key="cancel"
          onClick={ () => { setOpen(false) } }
        >
          {t('cancel')}
        </Button>
        <Button
          key="save"
          onClick={ () => {
            save(value)
            setOpen(false)
          } }
          type={ 'primary' }
        >
          {t('save')}
        </Button>
      </ModalFooter> }
      onCancel={ () => { setOpen(false) } }
      open={ open }
      size='XL'
      title={ 'HTML' }
    >
      <>
        <TextArea
          autoSize={ { minRows: 4 } }
          onChange={ (e) => { setValue(e.target.value) } }
          value={ value }
        />
      </>
    </Modal>
  )
}
