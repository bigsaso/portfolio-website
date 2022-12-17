export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{type: 'image'}],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'url',
            title: 'Url',
            type: 'url',
        },
        {
            name: 'badgetxt',
            title: 'BadgeTXT',
            type: 'string',
        },
        {
            name: 'badge',
            title: 'Badge',
            type: 'boolean'
        }
    ]
}