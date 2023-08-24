import IconButton from '@mui/material/IconButton'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import TranslateIcon from '@mui/icons-material/Translate'
import { styles } from './styles'
import { useTranslation } from 'react-i18next'
import { type ReactElement, useState } from 'react'
import { changeLanguage } from 'i18next'
import { sanitizeLanguage } from '@utils'

const LanguageSwitcher = (): ReactElement => {
    const { t } = useTranslation()
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const setLang = (lng: string): void => {
        changeLanguage(lng)
        handleClose()
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <>
            <IconButton
                aria-label="language switcher"
                aria-controls="language-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
            >
                <TranslateIcon />
            </IconButton>
            <Menu
                id="language-appbar"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem
                    onClick={(): void => setLang('en')}
                    selected={sanitizeLanguage() === 'en'}
                    sx={styles.languageButton}
                >
                    {t('english')}
                </MenuItem>
                <MenuItem
                    onClick={(): void => setLang('es')}
                    selected={sanitizeLanguage() === 'es'}
                    sx={styles.languageButton}
                >
                    {t('spanish')}
                </MenuItem>
            </Menu>
        </>
    )
}

export default LanguageSwitcher
